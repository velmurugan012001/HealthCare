using HeathCare.Models;


namespace HeathCare.Repository.Interfaces
{
    public interface IAppointmentService
    {
        public Task<List<Appointment>> GetAppointments();
        public Task<Appointment> PutAppointment(int id, Appointment appointment);
        public Task<Appointment> PostAppointment(Appointment appointment);
        public Task<List<Appointment>> GetAppointmentDetail(string Id);

    }
}