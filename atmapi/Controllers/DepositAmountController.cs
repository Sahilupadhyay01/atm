using atmapi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace atmapi.Controllers
{
    [ApiController]
    [Route("api/setDeposit")]
    public class DepositAmountController : Controller
    {
        private readonly BankingDbContext _bankingDbContext;

        public DepositAmountController(BankingDbContext bankingDbContext)
        {
            _bankingDbContext = bankingDbContext;
        }

        [HttpPut]
        [Route("{id:long}")]
        public async Task<IActionResult> SetDeposit([FromRoute] long id, int pin, float newBal)
        {
            var updateInfo =
                await _bankingDbContext.CustomersData.FirstOrDefaultAsync(x => x.AccountNumber == id);

            if (updateInfo == null)
            {
                return NotFound();
            }

            if (updateInfo.CardPin != pin)
            {
                return Unauthorized();
            }

            updateInfo.TotalBalance += newBal;
            float balance = updateInfo.TotalBalance;
            string name = updateInfo.FullName;

            await _bankingDbContext.SaveChangesAsync();
            return Ok(new { name, balance });
        }
    }
}
