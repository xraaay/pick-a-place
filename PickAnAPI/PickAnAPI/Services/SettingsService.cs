using PickAnAPI.Models;
using PickAnAPI.Models.Requests;
using PickAnAPI.Models.Requests.Settings;
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

        public YelpRequest SearchById(int id)
        {
            using(SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();

                SqlCommand cmd = conn.CreateCommand();

                cmd.CommandText = "Settings_Select_ById";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Id", id);

                YelpRequest setting = null;

                using(SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        string price = (string)reader["Price"];
                        if(price.Length > 2)
                        {
                            price = price.Substring(1, price.Length - 2);
                        }
                        
                        setting = new YelpRequest()
                        {
                            Location = (string)reader["Location"],
                            OpenNow = (bool)reader["OpenNow"],
                            Radius = (int)reader["Radius"],
                            Price = price,
                            Limit = 50,
                            Term = "Restaurant"
                        };
                    }
                }
                return setting;
            }
        }

        public List<Settings> GetSettings()
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();

                SqlCommand cmd = conn.CreateCommand();

                cmd.CommandText = "Settings_SelectAll";
                cmd.CommandType = CommandType.StoredProcedure;

                List<Settings> settings = new List<Settings>();

                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Settings setting = new Settings()
                        {
                            Id = (int)reader["Id"],
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
                cmd.CommandType = CommandType.StoredProcedure;
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

        public void Update(SettingsUpdate req)
        {
            using(SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();

                SqlCommand cmd = conn.CreateCommand();
                cmd.CommandText = "Settings_Update";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Id", req.Id);
                cmd.Parameters.AddWithValue("@Name", req.Name);
                cmd.Parameters.AddWithValue("@Location", req.Location);
                cmd.Parameters.AddWithValue("@Radius", req.Radius);
                cmd.Parameters.AddWithValue("@Price", req.Price);
                cmd.Parameters.AddWithValue("@OpenNow", req.OpenNow);

                cmd.ExecuteNonQuery();
            }
        }

        public void Delete(int id)
        {
            using(SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();

                SqlCommand cmd = conn.CreateCommand();

                cmd.CommandText = "Settings_Delete";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Id", id);

                cmd.ExecuteNonQuery();
            }
        }

        public Settings GetById(int id)
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();

                SqlCommand cmd = conn.CreateCommand();

                cmd.CommandText = "Settings_Select_ById";
                cmd.CommandType = CommandType.StoredProcedure;

                cmd.Parameters.AddWithValue("@Id", id);

                Settings setting = null;
                using (SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        setting = new Settings()
                        {
                            Id = (int)reader["Id"],
                            Name = (string)reader["Name"],
                            Location = (string)reader["Location"],
                            OpenNow = (bool)reader["OpenNow"],
                            Price = (string)reader["Price"],
                            Radius = (int)reader["Radius"]
                        };
                    }
                }
                return setting;

            }
        }
    }
}