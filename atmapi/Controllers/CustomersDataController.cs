using atmapi.Data;
using atmapi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace atmapi.Controllers
{
    [ApiController]
    [Route("api/getBalance")]

    public class CustomersDataController : Controller
    {

        private readonly BankingDbContext _bankingDbContext;
        public CustomersDataController(BankingDbContext bankingDbContext)
        {
            _bankingDbContext = bankingDbContext;
        }

       // [HttpGet]
        //public async Task<IActionResult> GetAllTransactions()
        //{
          //  var transactions = await _bankingDbContext.TransactionRecord.ToListAsync();

            //return Ok(transactions);
        //}

        [HttpPost]
        public async Task<IActionResult> AddCustomer([FromBody] CustomerData customerRequest)
        {
            customerRequest.Id = Guid.NewGuid();
            await _bankingDbContext.CustomersData.AddAsync(customerRequest);
            await _bankingDbContext.SaveChangesAsync();

            return Ok(customerRequest);
        }

        [HttpGet]
        [Route("{id:long}")]

        public async Task<IActionResult> GetBalance([FromRoute] long id, int pin)
        {
            var customerInfo =
                await _bankingDbContext.CustomersData.FirstOrDefaultAsync(x => x.AccountNumber == id);

            if (customerInfo == null)
            {
                return NotFound();
            }

            if (customerInfo.CardPin != pin)
            {
                return Unauthorized();
            }

            float balance = customerInfo.TotalBalance;
            string name = customerInfo.FullName;

            return Ok(new { name, balance });
        }
    }
}
