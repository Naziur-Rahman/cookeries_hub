import React, { useState } from 'react'

const ShoppingInformation = () => {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      title: "Recipe to List",
      description: "Convert any recipe into a shopping list with one click",
      icon: "📝",
      details: "Simply click the 'Create Shopping List' button on any recipe page. Our system automatically extracts all ingredients and quantities for you."
    },
    {
      title: "Multi-Recipe Lists",
      description: "Combine multiple recipes into one shopping trip",
      icon: "🔀",
      details: "Add recipes to your weekly meal plan and get a consolidated shopping list with duplicate items merged automatically."
    },
    {
      title: "Quantity Calculator",
      description: "Automatic portion scaling for any number of servings",
      icon: "🧮",
      details: "Adjust servings and watch the quantities update automatically. Perfect for cooking for larger groups or meal prepping."
    },
    {
      title: "Store Sections",
      description: "Lists organized by produce, dairy, meats, etc.",
      icon: "🏷️",
      details: "Shop efficiently with items grouped by store sections. Never wander aimlessly in the grocery store again."
    }
  ]

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionize Your Recipe Shopping
          </h2>
          <p className="text-xl text-gray-600">
            Spend less time planning and more time cooking
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-gray-200">
            {features.map((feature, index) => (
              <button
                key={index}
                className={`flex flex-col items-center p-6 transition-all duration-200 ${
                  activeFeature === index 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <span className="text-2xl mb-2">{feature.icon}</span>
                <span className="font-semibold text-sm">{feature.title}</span>
              </button>
            ))}
          </div>

          <div className="p-8 md:p-12">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {features[activeFeature].title}
              </h3>
              <p className="text-lg text-gray-700 mb-4 font-medium">
                {features[activeFeature].description}
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {features[activeFeature].details}
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center gap-2">
                Try It Now
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingInformation