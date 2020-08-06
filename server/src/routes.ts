import express from 'express';
import db from './database/connection';
import convertTimeToMinute from './utils/convertTimeToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
};

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Heya Globe' });
});

routes.post('/classes', async (req, res) => {
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
});

export default routes;