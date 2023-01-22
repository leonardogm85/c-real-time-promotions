using Microsoft.AspNetCore.SignalR;
using RealTimePromotions.Api.Models;

namespace RealTimePromotions.Api.Hubs
{
    public class PromotionsHub : Hub
    {
        public async Task Register(Promotion promotion)
        {
            await Clients.Caller.SendAsync("RegisteredSuccessfully");
            await Clients.Others.SendAsync("ReceivePromotion", promotion);
        }
    }
}
