namespace RealTimePromotions.Api.Models
{
    public class Promotion
    {
        public Promotion(string company, string description, string rule, string address)
        {
            Company = company;
            Description = description;
            Rule = rule;
            Address = address;
        }

        public string Company { get; }
        public string Description { get; }
        public string Rule { get; }
        public string Address { get; }
    }
}
