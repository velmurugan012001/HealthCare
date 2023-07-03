﻿using HeathCare.Models;
using HeathCare.Repository.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace HeathCare.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private readonly IDoctor _context;
        public DoctorController(IDoctor context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<List<Doctor>> GetRequest()
        {
            return await _context.GetRequest();
        }

        [HttpGet("Doctors")]
        public async Task<List<Doctor>> DoctorDetails()
        {
            return await _context.DoctorDetails();
        }

        [HttpPost]
        public async Task<Doctor> PostDoctor(Doctor doctor)
        {
            return await _context.PostDoctor(doctor);
        }

        [HttpPut("{id}")]
        public async Task<Doctor> UpdateDoctor(string id, Doctor doctor)
        {
            return await _context.UpdateDoctor(id, doctor);
        }

        [HttpDelete("{id}")]
        public async Task<string> deleteRequest(string id)
        {
            return await _context.deleteRequest(id);
        }
    }
}