package com.project.demo.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;

@Controller
public class IndexController {

	private static String CONST_SRC_FILENAME = "./src/main/resources/static/reports/resume.jrxml";
	
	@RequestMapping("/")
	public String getIndex() {
		return "index.html";
	}
	
	@RequestMapping(value="/resume")
	public void generatePDFJasperChart(HttpServletRequest request,
				HttpServletResponse response) throws IOException {
	 
		
		try {
			String sourceFileName = CONST_SRC_FILENAME;
			System.out.println(sourceFileName);
			JasperReport report = JasperCompileManager.compileReport(sourceFileName);
			JasperPrint jasperPrint = JasperFillManager.fillReport(report,
					null, new JREmptyDataSource());
			if (jasperPrint != null) {
				byte[] pdfReport = JasperExportManager
						.exportReportToPdf(jasperPrint);
				response.reset();
				response.setContentType("application/pdf");
				response.setHeader("Cache-Control", "no-store");
				response.setHeader("Cache-Control", "private");
				response.setHeader("Pragma", "no-store");
				response.setContentLength(pdfReport.length);
				response.getOutputStream().write(pdfReport);
				response.getOutputStream().flush();
				response.getOutputStream().close();
			}
		} catch (JRException e) {
			e.printStackTrace();
		}
	}
}
