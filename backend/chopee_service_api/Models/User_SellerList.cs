using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace chopee_service_api.Models
{
    public class User_SellerList
    {
        public long SellerId { get; set; }
        public string  StoreName { get; set; }
        public long SellerAddress { get; set; }
        public long SellerProfilePic { get; set; }
        public string SellerCellNo { get; set; }


        internal AppDb gDb { get; set; }

        internal User_SellerList(AppDb db)
        {
            gDb = db;
        }
        public User_SellerList()
        {

        }

        public async Task <List<User_SellerList>> GetAllSellers()
        {
            using var oCommand = gDb.Connection.CreateCommand();
            oCommand.CommandText = @"SELECT `seller_id`,`store_name`,`seller_address`,`seller_profile_picture`,`seller_cell_no`
                                    FROM `chopee_user`.`chopee_seller`";

            var oResult = await oCommand.ExecuteReaderAsync();
            var oSellers = new List<User_SellerList>();

            bool hasValue = false;
            using (oResult)
            {
                while (await oResult.ReadAsync())
                {
                    hasValue = true;
                    var oSeller = new User_SellerList();
                    oSeller.SellerId = oResult.GetInt32("seller_id");
                    oSeller.StoreName = oResult.GetString("store_name");
                    oSeller.SellerAddress = oResult.GetInt32("seller_address");
                    oSeller.SellerProfilePic = oResult.GetInt32("seller_profile_picture");
                    oSeller.SellerCellNo = oResult.GetString("seller_cell_no");

                    oSellers.Add(oSeller);
                }
            }

            if (!hasValue)
            {
                oSellers = null;
            }

            return oSellers;

        }

    }
}
