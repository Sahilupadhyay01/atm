using atmapi.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace atmapi.Controllers
{
    [ApiController]
    [Route("api/setWithdraw")]
    public class WithdrawAmountController : Controller
    {
        private readonly BankingDbContext _bankingDbContext;

        public WithdrawAmountController(BankingDbContext bankingDbContext)
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

            if (updateInfo.TotalBalance < newBal)
            {
                return NotFound();
            }
            else
            {
                updateInfo.TotalBalance -= newBal;
            }

            float balance = updateInfo.TotalBalance;
            string name = updateInfo.FullName;

            await _bankingDbContext.SaveChangesAsync();
            return Ok(new { name, balance });
        }
    }
}
