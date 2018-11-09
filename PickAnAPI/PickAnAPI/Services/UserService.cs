using PickAnAPI.Models.Requests;
using PickAnAPI.Models.Responses;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PickAnAPI.Services
{
    public class UserService
    {
        readonly string connectionString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;

        public int Register(UserCreate req)
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                SqlCommand cmd = conn.CreateCommand();

                cmd.CommandText = "Users_Insert";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Username", req.Username);
                cmd.Parameters.AddWithValue("@Password", req.Password);
                cmd.Parameters.AddWithValue("@Email", req.Email);

                cmd.Parameters.Add("@Id", SqlDbType.Int).Direction = ParameterDirection.Output;

                cmd.ExecuteNonQuery();

                int id = (int)cmd.Parameters["@Id"].Value;

                return id;
            }
        }

        public List<User> Login(UserLogin req)
        {
            using(SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                SqlCommand cmd = conn.CreateCommand();

                cmd.CommandText = "Users_Login";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Username", req.Username);
                cmd.Parameters.AddWithValue("@Password", req.Password);

                List<User> users = new List<User>();

                using(SqlDataReader reader = cmd.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        User user = new User()
                        {
                            Password = (string)reader["Password"],
                            Username = (string)reader["Username"]
                        };
                        users.Add(user);
                    }
                }
                return users;
            }
        }
    }
}