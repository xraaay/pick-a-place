using Help.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Help.Services
{
    public class SettingsService
    {
        string connectionString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;

        public List<Settings> GetSettings()
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();

                SqlCommand cmd = conn.CreateCommand();

                cmd.CommandText = "Settings_SelectAll";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                List<Settings> settings = new List<Settings>();

                using(SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Settings setting = new Settings()
                        {
                            Location = (string)reader["Location"],
                            OpenNow = (bool)reader["OpenNow"],
                            Price = (int)reader["Price"],
                            Radius = (int)reader["Radius"]
                        };
                        settings.Add(setting);
                    }
                }
                return settings;
            }
        }
    }
}