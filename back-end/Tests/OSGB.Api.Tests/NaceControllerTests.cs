using Xunit;

namespace OSGB.Api.Tests
{
    public class NaceControllerTests
    {
        [Fact]
        public void ShouldReturnStringArray()
        {
            var controller = new Controllers.NaceController();

            //Given
            var expected = new string[] { "value1", "value2" };
            //When
            var actual = controller.Get();
            //Then
            Assert.Equal(expected, actual);
        }
    }
}
