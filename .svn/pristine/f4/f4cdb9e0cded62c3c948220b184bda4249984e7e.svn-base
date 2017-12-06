package com.intelli.listener;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import org.quartz.CronScheduleBuilder;
import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.SchedulerException;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.quartz.impl.StdSchedulerFactory;

import com.intelli.runtime.MemoryMoniter;
import com.intelli.util.FileUtil;

public class IBEStartListener implements ServletContextListener {

	private Scheduler scheduler = null;

	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
		// TODO Auto-generated method stub
		if(scheduler != null)
		{
			try {
				if(scheduler.isStarted())
					scheduler.shutdown(true);
				if(scheduler.isInStandbyMode())
					scheduler.shutdown(true);
				scheduler.shutdown(true);
				scheduler = null;
				logger.info("city scheduler has been shut down successfully..");
			} catch (SchedulerException e) {
				// TODO Auto-generated catch block
				logger.error("city scheduler shut down exception---",e);
			}

		}

		logger.info("my project is getting destroyed..");


	}

	public static final org.apache.log4j.Logger logger = org.apache.log4j.Logger.getLogger(IBEStartListener.class);

	public static String pathWebContent = "";
	@Override
	public void contextInitialized(ServletContextEvent arg0) {
		// TODO Auto-generated method stub

		pathWebContent = arg0.getServletContext().getRealPath("");
		logger.info("web content real location is.."+pathWebContent);
		//logger.info("my project is getting initialized..");
		JobDetail job = JobBuilder.newJob(CityLoadJob.class)
				.withIdentity("anyJobName", "group1").build();
		try {

			//SimpleScheduleBuilder.repeatSecondlyForever( 25 )

			new MemoryMoniter().logMemoryUsage();
			CityLoadJob cityLoadJobFirstTime = new CityLoadJob();
			try {
				cityLoadJobFirstTime.searchCitiesAndSave();
				logger.info("city load first time done.");
			} catch (Exception e) {
				logger.info("city load first ### exception...");
				e.printStackTrace();
			}
			new MemoryMoniter().clearMemoryUsage();

			/*Trigger trigger = TriggerBuilder
					.newTrigger()
					.withIdentity("anyTriggerName", "group1")
					.withSchedule(
							CronScheduleBuilder.cronSchedule("0/20 * * * * ?"))
					.build();*/
			// triggers city load job at 1 a.m daily
			Trigger trigger = TriggerBuilder.newTrigger()
					.withIdentity("trigger3", "group1")
					.withSchedule(CronScheduleBuilder.dailyAtHourAndMinute(1, 00))	
					//.withSchedule(CronScheduleBuilder.m(1, 00))	
					.build();

			scheduler = new StdSchedulerFactory().getScheduler();
			scheduler.start();
			scheduler.scheduleJob(job, trigger);

		} catch (SchedulerException e) {
			if(scheduler != null)
				scheduler = null;
			e.printStackTrace();
		}

	}

}
