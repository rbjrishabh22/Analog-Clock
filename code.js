setInterval(()=> {
d = new Date();

htime = d.getHours();
mtime = d.getMinutes();
stime = d.getSeconds();

hrot = 30*htime + mtime/2;
mrot = 6*mtime;
srot = 6*stime;

clockHour.style.transform = `rotate(${hrot}deg)`;
clockMinute.style.transform = `rotate(${mrot}deg)`;
clockSecond.style.transform = `rotate(${srot}deg)`;

}, 1000);              