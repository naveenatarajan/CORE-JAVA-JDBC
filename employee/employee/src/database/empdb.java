package database;
import java.sql.Connection;

import java.sql.SQLException;

import java.sql.DriverManager;

public class empdb {
	public static Connection createConnection() throws SQLException, ClassNotFoundException{
	Connection con = null;
	Class.forName("com.mysql.jdbc.Driver");
	con = DriverManager.getConnection("jdbc:mysql://localhost:3306/employ", "root", "");
 return con;  
	}
	public empdb(){}
	
}

