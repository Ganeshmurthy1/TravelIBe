package com.intelli.runtime;

import com.intelli.listener.IBEStartListener;

public class MemoryMoniter {
	public static final org.apache.log4j.Logger logger = org.apache.log4j.Logger.getLogger(IBEStartListener.class);
	
	public void logMemoryUsage()
	{
		int mb = 1024*1024;		
		//Getting the runtime reference from system
		Runtime runtime = Runtime.getRuntime();		
		logger.info("##### Heap utilization statistics [MB] #####");		
		//Print used memory
		logger.info("Used Memory:" 
			+ (runtime.totalMemory() - runtime.freeMemory()) / mb);
		//Print free memory
		logger.info("Free Memory:" 
			+ runtime.freeMemory() / mb);		
		//Print total available memory
		logger.info("Total Memory:" + runtime.totalMemory() / mb);
		//Print Maximum available memory
		logger.info("Max Memory:" + runtime.maxMemory() / mb);
	}
	public void clearMemoryUsage()
	{
		logMemoryUsage();
		logger.info("####################################");	
		logger.info("####################################");	
		logger.info("####################################");	
		logger.info("#########CLEARING#######");	
		System.gc();
		logMemoryUsage();
	}

}
