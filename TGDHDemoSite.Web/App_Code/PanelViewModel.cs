using System.Web;

public class PanelViewModel
{
    public string PanelHeadline{ get; set; }

    public IHtmlString PanelContent { get; set; }

    public int ImageId { get; set; }
}