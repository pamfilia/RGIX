﻿using System;
using OSGB.Data.Common;

namespace OSGB.Data.Entity
{
    public class ClaimItem<T> : IEntity
    {
        public string Name { get; set; }
        public T Value { get; set; }
        public string Id { get; set; }
        public DateTime Created { get; set; }
        public string Updated { get; set; }

        public string DocumentType => "claimItem";
    }
}