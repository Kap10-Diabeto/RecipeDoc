/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.recipedoc.u;

import com.mysql.jdbc.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
/**
 *
 * @author T4User
 */
public class ConnectionFactory {
    public static Connection  GetConnection() throws ClassNotFoundException, SQLException{
        String user = "root";
        String password = "";
        String url = "jdbc:mysql://localhost/recipedoc";
        Class.forName("com.mysql.jdbc.Driver");
        return (Connection) DriverManager.getConnection(url, user, password);
    }
}
