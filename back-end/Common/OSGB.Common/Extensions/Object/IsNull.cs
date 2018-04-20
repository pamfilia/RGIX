using System;

namespace OSGB.Common.Extensions.Object
{
    public static partial class ObjectExtensions
    {
        public static bool IsNullOrNot(this object obj)
        {
            return obj == null;
        }

        public static T IsNotNullCall<T>(this object obj, Func<T> action)
        {
            return obj == null ? default : action();
        }
    }
}