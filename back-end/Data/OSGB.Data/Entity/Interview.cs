using System;
using System.Collections.Generic;
using OSGB.Data.Common;

namespace OSGB.Data.Entity
{
    public class Interview :IEntity
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Interviewee { get; set; }
        public string Interviewed { get; set; }
        public DateTime InterviewDate { get; set; }
        public List<ServiceType> ServiceType { get; set; }
        public string InterviewNote { get; set; }
        public DateTime InterviewReminderDate { get; set; }
        public string InterviewReminderNote { get; set; }
        public DateTime ReminderClosingDate { get; set; }
        public string ReminderClosingNote { get; set; }
        public DateTime Created { get; set; }
        public string Updated { get; set; }
        public string DocumentType => "interview";
    }
}