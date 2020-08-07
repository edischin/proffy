export default function convertTimeToMinute(time: string) {
  const [hours, minutes] = time.split(':').map(Number);
  const totalMinutes = (hours * 60) + minutes;
  
  return totalMinutes;
}