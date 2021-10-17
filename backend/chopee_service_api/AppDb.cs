using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace chopee_service_api
{
    public class AppDb
    {
        public MySqlConnection Connection { get; }

        public AppDb(string connectionstring)
        {
            Connection = new MySqlConnection(connectionstring);
        }
        public void Dispose() => Connection.Dispose();
    }
}
