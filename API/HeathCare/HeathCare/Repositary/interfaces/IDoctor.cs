﻿using HeathCare.Models;


namespace HeathCare.Repository.Interfaces
{
    public interface IDoctor
    {

        public Task<List<Doctor>> GetRequest();
        public Task<List<Doctor>> DoctorDetails();

        public Task<Doctor> PostDoctor(Doctor doctor);
        public Task<Doctor> UpdateDoctor(string id, Doctor doctor);
        public Task<string> deleteRequest(string id);

    }
}