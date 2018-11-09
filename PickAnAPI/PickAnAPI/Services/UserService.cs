using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace PickAnAPI.Services
{
    public class UserService
    {
        string connectionString = ConfigurationManager.ConnectionStrings["Default"].ConnectionString;

        public int Register()
        {
            using (SqlConnection conn = new SqlConnection(connectionString))
            {
                conn.Open();
                SqlCommand cmd = conn.CreateCommand();

                cmd.CommandText = "Users_Insert";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                int id = 0;

            }
        }
    }
}