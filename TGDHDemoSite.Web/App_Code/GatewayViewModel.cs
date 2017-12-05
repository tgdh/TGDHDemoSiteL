using System.Web;

public class GatewayViewModel
{
    
    public string blockImageTitle { get; set; }

    public string blockTitle { get; set; }

    public IHtmlString blockContent { get; set; }

    public int Image { get; set; }

    public string blockCta { get; set; }    

    public bool HasImage { get; set; }

}