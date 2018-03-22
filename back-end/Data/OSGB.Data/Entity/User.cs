using System;
using System.Collections.Generic;
using OSGB.Data.Common;

namespace OSGB.Data.Entity
{
    public class User : IEntity
    {
        public string UserName { get; set; }
        public string Password { get; set; }
        public DateTime LastLogin { get; set; }
        public IReadOnlyList<Profile> Profiles { get; internal set; }
        public IReadOnlyList<Claim> Claims { get; internal set; }
        public bool IsLocked { get; set; }
        public string Id { get; set; }
        public DateTime Created { get; set; }
        public string Updated { get; set; }

        public string DocumentType => "user";
    }
}