﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using projectTracker.Models;

namespace projectTracker.Controllers
{

    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class ProjectController : ControllerBase
    {

        // injecting the DbContext object into this controller for use! No more construction needed :)
        private MainDataContext projectManager;
        public ProjectController(MainDataContext myManager) {
            projectManager = myManager;
        }

        [HttpGet]
        public IEnumerable<Project> Index() {
            return projectManager.getProjects();
        }

        [HttpPost]
        public async Task<IActionResult> Add(Project project)
        {
            try
            {
                projectManager.Add(project);
                await projectManager.SaveChangesAsync();
                return Ok(project);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public async Task<IActionResult> Update(Project project) {
            try
            {
                projectManager.Update(project);
                await projectManager.SaveChangesAsync();
                return Ok(project);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            //TODO: insert new project using MainDataContext
            // return BadRequest("Not implemented yet");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id) {
            var projectItem = await projectManager.Project.FindAsync(id);
            if (projectItem == null)
            {
                return NotFound("The element does not exist");
            }
            projectManager.Project.Remove(projectItem);
            await projectManager.SaveChangesAsync();
            return Ok();
        }


    }
}