﻿using HeathCare.Data;
using HeathCare.Models;
using HeathCare.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace RoleBasedAuthorization.Repository.Services
{
    public class DoctorService : IDoctor
    {

        private readonly HeathCareDbContext _context;
        public DoctorService(HeathCareDbContext context)
        {
            _context = context;
        }

        public async Task<List<Doctor>> GetRequest()
        {
            return await _context.Doctor.Where(d => d.requestStatus == "request").ToListAsync();
        }

        public async Task<List<Doctor>> DoctorDetails()
        {
            return await _context.Doctor.Where(d => d.requestStatus == "Accepted").ToListAsync();

        }


        public async Task<Doctor> PostDoctor(Doctor doctor)
        {
            _context.Doctor.Add(doctor);
            await _context.SaveChangesAsync();
            return doctor;

        }

        public async Task<Doctor> UpdateDoctor(string id, Doctor doctor)
        {
            var doc = await _context.Doctor.FirstOrDefaultAsync(x => x.Id == id);
            if (doc != null)
            {
                doc.Experiance = doctor.Experiance;
                doc.Email = doctor.Email;
                doc.requestStatus = doctor.requestStatus;
                doc.Specialization = doctor.Specialization;
                doc.location = doctor.location;
                doc.phone = doctor.phone;

                await _context.SaveChangesAsync();
            }


            return doc;

        }
        public async Task<string> deleteRequest(string id)
        {
            var doc = await _context.Doctor.FindAsync(id);
            _context.Doctor.Remove(doc);
            await _context.SaveChangesAsync();
            return "Deleted Successfully";
        }

    }
}