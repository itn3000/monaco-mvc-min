using System;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace MonacoMvcMin
{
    public class Program
    {
        public static void Main(string[] args)
        {
            using(var host = new WebHostBuilder()
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseStartup<Startup>()
                .UseUrls("http://localhost:8890")
                .Build())
            {
                host.Run();
            }
        }
    }
}
