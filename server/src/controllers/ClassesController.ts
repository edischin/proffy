import { Request, Response, response } from 'express';

import db from '../database/connection';
import convertTimeToMinute from '../utils/convertTimeToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
};

export default class ClassesController {
  async index (req:Request, res:Response) {
    const filters = req.query;
    const week_day = filters.week_day as string;
    const subject = filters.subject as string;
    const time = filters.time as string;

    if (!week_day || !subject || !time) {
      return res.status(400).json({
        error: 'Missing filters to search classes'
      });
    }

    const timeInMinutes = convertTimeToMinute(time);

    const classes = await db('classes')
      .where('classes.subject', '=', subject)
      .whereExists(function () {
        this.select('class_schedules.*')
          .from('class_schedules')
          .whereRaw('`class_schedules`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedules`.`week_Day` = ??', [Number(week_day)])
          .whereRaw('`class_schedules`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedules`.`to` > ??', [timeInMinutes]);
      })
      .join('users', 'classes.user_id', '=', 'users.id')
      .select('classes.*', 'users.*');

    return res.json(classes);
  }

  async create (req:Request, res:Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = req.body;
  
    const trx = await db.transaction();
  
    try {
      const [user_id] = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio
      });
  
      const [class_id] = await trx('classes').insert({
        subject,
        cost,
        user_id
      });
  
      const classSchedules = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertTimeToMinute(scheduleItem.from),
          to: convertTimeToMinute(scheduleItem.to)
        };
      });
  
      await trx('class_schedules').insert(classSchedules);
  
      await trx.commit();
  
      return res.status(201).send();
    } catch (err) {
      await trx.rollback();
      return res.status(400).json({
        error: `Unexpected error while creating class: ${err}`
      })
    }
  }
}