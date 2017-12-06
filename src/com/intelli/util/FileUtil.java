package com.intelli.util;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.util.Locale;

import org.slf4j.Logger;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.intelli.listener.IBEStartListener;
import com.lintas.admin.SearchAction;

public class FileUtil  {

	public static final org.apache.log4j.Logger logger = org.apache.log4j.Logger.getLogger(FileUtil.class);
	
	public static String getWebDir() {

	
		String dirLoc = ""+File.separator+"prabha-work"+File.separator+".metadata"+File.separator+".plugins"+File.separator+"org.eclipse.wst.server.core"+File.separator+"tmp0"+File.separator+"wtpwebapps"+File.separator+"tayyarah";
		//String dirLoc = ""+File.separator+"prabha-work"+File.separator+"tayyarah"+File.separator+"WebContent";
		return dirLoc;

	}	 
	public static boolean writeJson(Object message, String filenameWithExt)
	{
		ObjectMapper mapper = new ObjectMapper();
		FileOutputStream fOut; 
		String filename = IBEStartListener.pathWebContent +File.separator+filenameWithExt;
		
		try { 
			mapper.writerWithDefaultPrettyPrinter().writeValue(new File(filename), message);
			logger.info("city json is created at..."+filename);
			return true;
		}
		catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			logger.info("Log creation at---"+filename+"....FileNotFoundException."+e.getMessage());
			e.printStackTrace();
			return false;
		}
		catch (NullPointerException e) {
			// TODO Auto-generated catch block
			logger.info("Log creation at---"+filename+"....NullPointerException."+e.getMessage());

			e.printStackTrace();
			return false;
		}
		catch (Exception e) {
			// TODO Auto-generated catch block
			logger.info("Log creation at---"+filename+"....Exception."+e.getMessage());

			e.printStackTrace();
			return false;
		}
	}

}