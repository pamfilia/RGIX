using System;
using System.Collections.Generic;
using Xunit;

namespace OSGB.Api.Tests
{
    public class ValuesControllerTests
    {
        [Fact]
        public void ShouldReturnStringArray()
        {
            var controller = new OSGB.Api.Controllers.ValuesController();

            //Given
            IEnumerable<string> expected = new string[] { "value1", "value2" };
            //When
            IEnumerable<string> actual = controller.Get();
            //Then
            Assert.Equal(expected, actual);
        }
    }
}
