/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.recipedoc.beans;

import at.favre.lib.crypto.bcrypt.BCrypt;
import com.mycompany.recipedoc.entities.Credentials;
import com.mysql.jdbc.Connection;
import com.mycompany.recipedoc.u.ConnectionFactory;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Base64;

/**
 *
 * @author Matteus Psajd
 */
public class CredentialsBean {

    public Credentials createCredentials(String basicAuth) {
        basicAuth = basicAuth.substring(6).trim();
        byte[] bytes = Base64.getDecoder().decode(basicAuth);
        basicAuth = new String(bytes);
        int colonPos = basicAuth.indexOf(":");
        String username = basicAuth.substring(0, colonPos);
        String password = basicAuth.substring(colonPos + 1);
        return new Credentials(username, password);
    }

    public boolean checkCredentials(Credentials credentials) {
        try (Connection connection = ConnectionFactory.GetConnection()) {
            Statement stmt = connection.createStatement();
            String sql = String.format("SELECT * FROM user WHERE username = '%s'", credentials.getUsername());
            ResultSet data = stmt.executeQuery(sql);
            if (data.next()) {
                String hashedpassword = data.getString("hashed_password");
                BCrypt.Result result = BCrypt.verifyer().verify(credentials.getPassword().toCharArray(), hashedpassword);
                return result.verified;
            }
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
        return false;
    }

    public int saveCredentials(Credentials credentials) {
        try (Connection connection = ConnectionFactory.GetConnection()) {
            String hashedpassword
                    = BCrypt.withDefaults().hashToString(12, credentials.getPassword().toCharArray());
            Statement stmt = connection.createStatement();
            String sql = String.format("INSERT INTO user VALUES ('%s', '%s')", credentials.getUsername(), hashedpassword);
            return stmt.executeUpdate(sql);
        } catch (Exception e) {
            System.out.println("CredentialsBean.saveCredentials: " + e.getMessage());
            return 0;
        }
    }

}
