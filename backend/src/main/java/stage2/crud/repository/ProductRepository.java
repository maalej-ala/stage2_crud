package stage2.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import stage2.crud.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
