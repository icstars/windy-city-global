# The postgres database

We have set up heroku apps for each of your teams that will give you access to a remote postgres database. When we say remote that refers to the fact that it exists on heroku. We will provide you access to these apps and a configuration file `config.js` when we introduce the repo. **You are not required to learn how to set all this up.** But if you want to get started without the heroku app you can also use postgres locally!

## When you are on cloud9

This .sql is for setting up your trains table in the database for the example code to work. These files exist in `/database_examples`. You can execute the following commands in your terminal filling in the values like <password> before executing them. 

#### locally:
```sql
#in cloud 9, start the postgres service:
sudo service postgresql start

#connect:
sudo sudo -u postgres psql

#get to the filesystem while still logged in as super user
\!

#change this directory
cd /backend

#run this file
psql -f postgres_trains_local_example.sql
```

#### remote:

```bash
export PGPASSWORD=<password>
```
```sql
psql -h <host> -d <database> -U <user_name> -p <port> <path to postgres_trains_remote_example.sql file>
```
