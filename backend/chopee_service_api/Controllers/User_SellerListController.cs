using chopee_service_api.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace chopee_service_api.Controllers
{
    [EnableCors("Corspolicy")]
    [Route("logiclude_news/[controller]")]

    public class User_SellerListController : Controller
    {
        public AppDb gDb { get; }
        
        public User_SellerListController(AppDb db)
        {
            gDb = db;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllSellers()
        {
            await gDb.Connection.OpenAsync();

            var OSeller = new User_SellerList(gDb);
            var oResult = new List<User_SellerList>();

            oResult = await OSeller.GetAllSellers();

            gDb.Dispose();
            if (oResult == null)
            {
                return new NotFoundResult();
            }

            return new OkObjectResult(oResult);
        }
    }
}
