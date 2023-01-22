using RealTimePromotions.Api.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR();

var app = builder.Build();

app.MapHub<PromotionsHub>("/PromotionsHub");

app.Run();
