using System.Linq;
using System.Web.Mvc;
using Umbraco.Web.Mvc;

namespace UmbracoStarterKit.Core.Controllers
{
    public class TwitterFeedController : SurfaceController
    {
        [HttpGet]
        public ActionResult AjaxTwitterFeed()
        {
            var homePage = Umbraco.TypedContentAtRoot().First();

            if (homePage == null)
            {
                return Content("");
            }

            // ReSharper disable once Mvc.PartialViewNotResolved
            return PartialView("~/Views/Partials/Shared/TwitterFeed.cshtml", homePage);
        }
    }
}
