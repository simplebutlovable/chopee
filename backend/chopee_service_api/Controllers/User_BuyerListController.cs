using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace chopee_service_api.Controllers
{
    [EnableCors("CorsPolicy")]
    [Route ("User/BuyerList/[Controller]")]
    public class User_BuyerListController : Controller
    {
        public AppDb gDb { get; }

       
    
    }
}
