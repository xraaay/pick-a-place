using PickAnAPI.Models;
using PickAnAPI.Models.Requests;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PickAnAPI.Services
{
    public class SettingsService
    {
        readonly string connectionString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;

        public List<Settings> GetSettings()
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();

                SqlCommand cmd = conn.CreateCommand();

                cmd.CommandText = "Settings_SelectAll";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                List<Settings> settings = new List<Settings>();

                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Settings setting = new Settings()
                        {
                            Name = (string)reader["Name"],
                            Location = (string)reader["Location"],
                            OpenNow = (bool)reader["OpenNow"],
                            Price = (string)reader["Price"],
                            Radius = (int)reader["Radius"]
                        };
                        settings.Add(setting);
                    }
                }
                return settings;
            }
        }

        public int Create(SettingsCreate req)
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();

                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Settings_Insert";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Name", req.Name);
                cmd.Parameters.AddWithValue("@Location", req.Location);
                cmd.Parameters.AddWithValue("@Radius", req.Radius);
                cmd.Parameters.AddWithValue("@Price", req.Price);
                cmd.Parameters.AddWithValue("@OpenNow", req.OpenNow);

                cmd.Parameters.Add("@Id", SqlDbType.Int).Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();

                int id = (int)cmd.Parameters["@Id"].Value;

                return id;

            }
        }
    }
}