using System.Web;

public class SplitContentViewModel
{
    public string aboutHeadline { get; set; }

    public IHtmlString aboutContentLeft { get; set; }

    public IHtmlString aboutContentRight { get; set; }

    public string Cta { get; set; }

}