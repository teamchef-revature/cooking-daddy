package com.revature.utils;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.model.naming.ImplicitNamingStrategyJpaCompliantImpl;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.springframework.stereotype.Service;

@Service
public class HibernateUtil {
	private static HibernateUtil hu;
	private SessionFactory sf;
	
	public HibernateUtil() {
		super();
	}
	
	public synchronized SessionFactory getSessionFactory() {
		if(sf == null) {
			StandardServiceRegistry sr = new StandardServiceRegistryBuilder().configure().build();
			Metadata md = new MetadataSources(sr).getMetadataBuilder().applyImplicitNamingStrategy(ImplicitNamingStrategyJpaCompliantImpl.INSTANCE).build();
			sf = md.getSessionFactoryBuilder().build();
		}
		return sf;
	}
	
	public Session getSession() {
		return this.getSessionFactory().openSession();
	}
}
