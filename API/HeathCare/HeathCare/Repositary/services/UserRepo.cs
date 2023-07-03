using HeathCare.Data;
using HeathCare.Models;
using JWTAuthenticationApp.Interfaces;
using System.Diagnostics;

namespace JWTAuthenticationApp.Services
{
    public class UserRepo : IBaseRepo<string, User>
    {
        private readonly HeathCareDbContext _context;

        public UserRepo(HeathCareDbContext context)
        {
            _context = context;
        }
        public User Add(User item)
        {
            try
            {
                _context.Add(item);
                _context.SaveChanges();
                return item;
            }
            catch (Exception e)
            {
                Debug.WriteLine(e.Message);
                Debug.WriteLine(item);
            }
            return null;
        }

        public User Get(string key)
        {
            var user = _context.Users.FirstOrDefault(u => u.Id == key);
            return user;
        }

        public User Delete(string id)
        {
            var user = _context.Users.FirstOrDefault(u => u.Id == id);
            _context.Users.Remove(user);
            _context.SaveChanges();
            return user;
        }


    }
}