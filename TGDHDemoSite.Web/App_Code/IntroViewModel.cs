using System.Web;

public class IntroViewModel
{
    public string Headline{ get; set; }

    public string SubTitle { get; set; }

    public IHtmlString Content { get; set; }

    public string Cta { get; set; }

    public bool IsCentered { get; set; }
}