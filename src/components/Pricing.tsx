"use client";

import { motion } from 'motion/react';
import { Check, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function Pricing() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const plans = [
    {
      name: t('pricing.plans.solo.name'),
      tagline: t('pricing.plans.solo.tagline'),
      originalPrice: '',
      price: t('pricing.plans.solo.price'),
      period: t('pricing.plans.solo.period'),
      color: '#93C5FD', // Soft Blue
      image: '/agents/cassie.png',
      savings: '',
      description: t('pricing.plans.solo.description'),
      features: [
        '1 Dedicated Agent (Cassie)',
        'Basic Platform Integrations',
        'Weekly Performance Reports',
        'Standard 24/7 Support',
      ],
      popular: false,
    },
    {
      name: t('pricing.plans.team.name'),
      tagline: t('pricing.plans.team.tagline'),
      originalPrice: '',
      price: t('pricing.plans.team.price'),
      period: t('pricing.plans.team.period'),
      color: '#FDE68A', // Pastel Gold
      image: 'agents/mercyteam.png',
      savings: t('pricing.plans.team.popularLabel'),
      description: t('pricing.plans.team.description'),
      features: [
        'Trio Agents (Strategy & Growth)',
        'Unlimited Integrations',
        'Real-time Mercy Mode Dashboard',
        'Cross-department Automation',
        'Priority 1-on-1 Support',
      ],
      popular: true,
    },
    {
      name: t('pricing.plans.full.name'),
      tagline: t('pricing.plans.full.tagline'),
      originalPrice: '',
      price: t('pricing.plans.full.price'),
      period: t('pricing.plans.full.period'),
      color: '#A78BFA', // Deep Purple Accent
      image: '/agents/mercyfullteam.png',
      savings: '',
      description: t('pricing.plans.full.description'),
      features: [
        'All 12 Agents + Custom Agents',
        'Private Cloud Deployment',
        'Enterprise-grade Security',
        'Custom AI Training on Your Data',
        'Contractual KPI Guarantees',
      ],
      popular: false,
    }
  ];

  return (
    <section id="pricing" className={`py-24 md:py-32 relative overflow-hidden transition-colors duration-500 ${
      theme === 'dark' ? 'bg-[#050505]' : 'bg-slate-50'
    }`}>
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[#4C1D95]/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#93C5FD]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDE68A]/10 border border-[#FDE68A]/20 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#FDE68A] animate-pulse shadow-[0_0_10px_#FDE68A]"></div>
            <span className="text-[#FDE68A] text-xs font-bold tracking-widest uppercase" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Modern Guardian Angel
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-primary"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            {t('pricing.title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#93C5FD] via-[#FDE68A] to-[#A78BFA]">{t('pricing.titleAccent')}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-secondary text-lg max-w-2xl mx-auto font-light"
          >
            {t('pricing.subtitle')}
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start max-w-7xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative rounded-3xl flex flex-col overflow-hidden transition-all duration-500 ${
                theme === 'dark' ? 'bg-[#0B0F19]' : 'bg-white shadow-xl'
              } ${
                plan.popular 
                  ? 'border-2 lg:-translate-y-4 shadow-2xl z-20' 
                  : 'border border-primary/10 mt-0 lg:mt-4 hover:border-primary/20 z-10'
              }`}
              style={{ borderColor: plan.popular ? plan.color : undefined }}
            >
              {/* Popular Header */}
              {plan.popular && (
                <div 
                  className="w-full text-center py-2 text-sm font-bold tracking-wide"
                  style={{ backgroundColor: plan.color, color: '#1E1B4B' }}
                >
                  {t('pricing.mostPopular')}
                </div>
              )}

              {/* Image Section */}
              <div className="relative h-48 w-full bg-slate-900">
                <img 
                  src={plan.image} 
                  alt={plan.name} 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  theme === 'dark' ? 'from-[#0B0F19] via-[#0B0F19]/60' : 'from-white via-white/60'
                } to-transparent`}></div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col flex-grow -mt-8 relative z-10">
                
                {/* Plan Name & Savings */}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-medium text-primary" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {plan.name}
                    </h3>
                    <p className="text-sm font-mono mt-1" style={{ color: plan.color }}>{plan.tagline}</p>
                  </div>
                  {plan.savings && (
                    <span 
                      className="px-3 py-1 rounded-full border text-xs font-medium whitespace-nowrap ml-2"
                      style={{ borderColor: `${plan.color}50`, color: plan.color }}
                    >
                      {plan.savings}
                    </span>
                  )}
                </div>
                
                {/* Description */}
                <p className="text-secondary text-sm mb-6 min-h-[40px]">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-8">
                  {plan.originalPrice && (
                    <span className="text-2xl text-secondary line-through font-light">{plan.originalPrice}</span>
                  )}
                  <span className="text-4xl font-bold text-primary" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{plan.price}</span>
                  <span className="text-secondary font-light">{plan.period}</span>
                </div>

                {/* Action Button */}
                <button 
                  className={`w-full py-3.5 rounded-full font-bold mb-8 transition-all duration-300 ${
                    plan.popular
                      ? 'text-[#1E1B4B] hover:opacity-90'
                      : 'bg-transparent border border-primary/20 text-primary hover:bg-primary/5'
                  }`}
                  style={{ backgroundColor: plan.popular ? plan.color : 'transparent' }}
                >
                  {t('pricing.cta')}
                </button>

                {/* Guarantee */}
                <div className="flex items-center gap-2 mb-6 text-sm text-primary font-medium">
                  <ShieldCheck className="w-5 h-5" />
                  {t('pricing.guarantee')}
                </div>

                {/* Features List */}
                <ul className="space-y-4 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className={`w-4 h-4 shrink-0 ${theme === 'dark' ? 'text-white' : 'text-blue-600'}`} />
                      <span className="text-secondary text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
