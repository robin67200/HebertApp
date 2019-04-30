using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HebertApp.API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HebertApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobsController : ControllerBase
    {
        
        private readonly HebertAppAPIContext _context;

        public JobsController (HebertAppAPIContext context)
        {
            _context = context;
        }
        
        
        
        // GET api/jobs
        [HttpGet]
        public async Task<IActionResult> GetJobs()
        {
            var jobs = await _context.Jobs.ToListAsync();

            return Ok(jobs);
        }

        // GET api/jobs/5
        [HttpGet("{id}")]
        public async Task<ActionResult> GetOneJob(int ID)
        {
           var job = await _context.Jobs.FirstOrDefaultAsync(x => x.id == ID );

           return Ok(job);
        }
        

        // POST api/jobs
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Job job)
        {
            _context.Jobs.Add(job);
            await _context.SaveChangesAsync();

            return Ok();
        }

        //PUT api/jobs/(id)
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int ID, [FromBody] Job job)
        {
            var dbJob = _context.Jobs.FirstOrDefault(x => x.id == ID);
            dbJob.dateDebut = job.dateDebut;
            dbJob.dateFin = job.dateFin;
            dbJob.cheminShp = job.cheminShp;
            dbJob.parametres = job.parametres;
            dbJob.statut = job.statut;
            dbJob.chemin = job.chemin;
            dbJob.shp = job.shp;

            _context.Jobs.Update(dbJob);
            await _context.SaveChangesAsync();

            return Ok();
        }

        
        
        
        // DELETE api/values/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int ID)
        {
            var dbJob = _context.Jobs.FirstOrDefault(x => x.id == ID);
            _context.Remove(dbJob);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
