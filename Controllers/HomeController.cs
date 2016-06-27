using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using System;

namespace MonacoMvcMin.Controllers
{
    public class HomeController : Controller
    {
        ILogger m_Logger;
        public HomeController(ILoggerFactory loggerFactory)
        {
            m_Logger = loggerFactory.CreateLogger("Home");
        }
        public IActionResult Index()
        {
            return View();
        }
        public async Task<IActionResult> Download()
        {
            var formData = await Request.ReadFormAsync();
            m_Logger.LogInformation("hogehoge");
            foreach (var form in formData)
            {
                m_Logger.LogInformation($"key={form.Key},value={form.Value}");
            }
            return this.Content(string.Join("\r\n",formData["editorText"].ToArray()),"text/plain");
            // return Json(new
            // {
            //     data = formData["editorText"].ToArray()
            // });
        }
    }
}