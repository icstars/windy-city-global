-- Run the following command psql -f path/to/sql/file to set up the train database

drop table if exists trains;

create table if not exists trains (
  id serial primary key,
  trainNumber int unique,
  lineColor text,
  inService boolean
);

insert into trains (trainNumber, lineColor, inService) values (302, 'redline', true);
insert into trains (trainNumber, lineColor, inService) values (222, 'redline', false);
insert into trains (trainNumber, lineColor, inService) values (093, 'redline', false);
insert into trains (trainNumber, lineColor, inService) values (312, 'greenline', true);
insert into trains (trainNumber, lineColor, inService) values (329, 'greenline', false);
insert into trains (trainNumber, lineColor, inService) values (523, 'greenline', true);
insert into trains (trainNumber, lineColor, inService) values (300, 'blueline', true);
insert into trains (trainNumber, lineColor, inService) values (253, 'blueline', true);
insert into trains (trainNumber, lineColor, inService) values (534, 'brownline', false);
insert into trains (trainNumber, lineColor, inService) values (444, 'brownline', true);
insert into trains (trainNumber, lineColor, inService) values (552, 'brownline', true);
insert into trains (trainNumber, lineColor, inService) values (049, 'brownline', true);
