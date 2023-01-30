package io.john.programming.todoapp.repository;
// 1. It extends the JpaRepository interface.

// 2. It implements the findByUsername method.
// 3. It returns an Optional<User> object.
// 4. It uses the username as the search criteria.

import io.john.programming.todoapp.entity.Todo;
import io.john.programming.todoapp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
}
