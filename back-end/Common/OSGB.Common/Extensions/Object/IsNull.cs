namespace OSGB.Common.Extensions.Object
{
    public static partial class ObjectExtensions
    {
        public static bool IsNullOrNot(this object obj)
        {
            return obj == null;
        }
    }
}